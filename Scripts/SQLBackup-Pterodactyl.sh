#!/bin/bash

# Settings
date=$(date '+%d_%m_%Y-%H-%M-%S')
user="pterodactyl"
password="password"
db="panel"
folder="/home/monitor/Backup/SQL-Pterodactyl"
dropbox="/home/monitor/Dropbox/Backup/SQL-Pterodactyl"

# Do not edit
/usr/bin/mysqldump --single-transaction -h 127.0.0.1 --user=$user --password=$password $db --routines | gzip -9 -c> $folder/$db-`date +\%d_\%m_\%Y-\%H-\%M-\%S`.sql.gz 2>&1

# # Sync to Dropbox
rsync --chmod=777 -var $folder/ $dropbox
echo "Der blev foretaget en database backup via crontab!"
