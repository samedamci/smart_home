#!/usr/bin/env sh

[ "$(systemctl status lampka | grep "Active: active (running)")" ] && echo "Active"
