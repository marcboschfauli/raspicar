# Daemon for Fluentd on pi

## code

    $insserv -v -d /etc/init.d/fluentd


Create the Start Stop Script in /etc/init.d/fluentd after that install the service using the following command insserv -v -d /etc/init.d/fluentd 



    #! /bin/sh
    ### BEGIN INIT INFO
    # Provides:          fluentd
    # Required-Start:    $network $local_fs
    # Required-Stop:
    # Default-Start:     2 3 4 5
    # Default-Stop:      0 1 6
    # Short-Description: Log Everything in JSON
    # Description:       Fluentd init script.
    ### END INIT INFO
     
    # Author: Kohei MATSUSHITA <ma2shita+git@ma2shita.jp>
     
    # Do NOT "set -e"
     
    # PATH should only include /usr/* if it runs after the mountnfs.sh script
    PATH=/usr/local/bin:/sbin:/usr/sbin:/bin:/usr/bin
    DESC="Log Everything in JSON"
    NAME=fluentd
    PNAME=fluentd
    DAEMON=/usr/local/bin/${PNAME}
    USER=pi
    GROUP=pi
    PIDFILE=/home/pi/${PNAME}.pid
    LOGFILE=/home/pi/${PNAME}.log
    DAEMON_ARGS="--config /home/pi/${NAME}.conf  --log ${LOGFILE} --daemon ${PIDFILE} --user ${USER} --group ${GROUP}"
    SCRIPTNAME=/etc/init.d/$NAME
     
    # Exit if the package is not installed
    [ -x "$DAEMON" ] || exit 0
     
    # Read configuration variable file if it is present
    [ -r /etc/default/$NAME ] && . /etc/default/$NAME
     
    # Load the VERBOSE setting and other rcS variables
    . /lib/init/vars.sh
     
    # Define LSB log_* functions.
    # Depend on lsb-base (>= 3.2-14) to ensure that this file is present
    # and status_of_proc is working.
    . /lib/lsb/init-functions
     
    if [ -f "/usr/local/lib/libjemalloc.so" ]; then
        export LD_PRELOAD="/usr/local/lib/libjemalloc.so"
    fi
     
    #
    # Function that starts the daemon/service
    #
    do_start()
    {
        # Return
        #   0 if daemon has been started
        #   1 if daemon was already running
        #   2 if daemon could not be started
        start-stop-daemon --start --quiet --pidfile $PIDFILE --exec $DAEMON --test > /dev/null \
            || return 1
        start-stop-daemon --start --quiet --pidfile $PIDFILE --exec $DAEMON -- \
            $DAEMON_ARGS \
            || return 2
        # Add code here, if necessary, that waits for the process to be ready
        # to handle requests from services started subsequently which depend
        # on this one.  As a last resort, sleep for some time.
    }
     
    #
    # Function that stops the daemon/service
    #
    do_stop()
    {
        # Return
        #   0 if daemon has been stopped
        #   1 if daemon was already stopped
        #   2 if daemon could not be stopped
        #   other if a failure occurred
        start-stop-daemon --stop --quiet --retry=TERM/30/KILL/5 --pidfile $PIDFILE --name $PNAME
        RETVAL="$?"
        [ "$RETVAL" = 2 ] && return 2
        # Wait for children to finish too if this is a daemon that forks
        # and if the daemon is only ever run from this initscript.
        # If the above conditions are not satisfied then add some other code
        # that waits for the process to drop all resources that could be
        # needed by services started subsequently.  A last resort is to
        # sleep for some time.
        start-stop-daemon --stop --quiet --oknodo --retry=0/30/KILL/5 --exec $DAEMON
        [ "$?" = 2 ] && return 2
        # Many daemons don't delete their pidfiles when they exit.
        rm -f $PIDFILE
        return "$RETVAL"
    }
     
    #
    # Function that sends a SIGHUP to the daemon/service
    #
    do_reload() {
        start-stop-daemon --stop --signal HUP --quiet --pidfile $PIDFILE --name $PNAME
        return 0
    }
     
    do_flush() {
        start-stop-daemon --stop --signal USR1 --quiet --pidfile $PIDFILE --name $PNAME
        return 0
    }
     
    case "$1" in
      start)
        [ "$VERBOSE" != no ] && log_daemon_msg "Starting $DESC" "$NAME"
        do_start
        case "$?" in
            0|1) [ "$VERBOSE" != no ] && log_end_msg 0 ;;
            2) [ "$VERBOSE" != no ] && log_end_msg 1 ;;
        esac
        ;;
      stop)
        [ "$VERBOSE" != no ] && log_daemon_msg "Stopping $DESC" "$NAME"
        do_stop
        case "$?" in
            0|1) [ "$VERBOSE" != no ] && log_end_msg 0 ;;
            2) [ "$VERBOSE" != no ] && log_end_msg 1 ;;
        esac
        ;;
      status)
        status_of_proc "$DAEMON" "$NAME" && exit 0 || exit $?
        ;;
      reload)
        log_daemon_msg "Reloading $DESC" "$NAME"
        do_reload
        log_end_msg $?
        ;;
      flush)
        log_daemon_msg "Flushing and re-opening logfile $DESC" "$NAME"
        do_flush
        log_end_msg $?
        ;;
      restart)
        #
        # If the "reload" option is implemented then remove the
        # 'force-reload' alias
        #
        log_daemon_msg "Restarting $DESC" "$NAME"
        do_stop
        case "$?" in
          0|1)
            do_start
            case "$?" in
                0) log_end_msg 0 ;;
                1) log_end_msg 1 ;; # Old process is still running
                *) log_end_msg 1 ;; # Failed to start
            esac
            ;;
          *)
            # Failed to stop
            log_end_msg 1
            ;;
        esac
        ;;
      *)
        #echo "Usage: $SCRIPTNAME {start|stop|restart|reload|force-reload}" >&2
        echo "Usage: $SCRIPTNAME {start|stop|status|restart|flush}" >&2
        exit 3
        ;;
    esac