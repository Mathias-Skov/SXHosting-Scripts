#!/bin/bash

# Settings
date=$(date '+%d_%m_%Y-%H-%M-%S')
user="whmcs"
password="password"
db="whmcs"
folder="/home/monitor/Backup/SQL-WHMCS"
dropbox="/home/monitor/Dropbox/Backup/SQL-WHMCS"

# Do not edit
/usr/bin/mysqldump --single-transaction -h 127.0.0.1 --user=$user --password=$password $db --routines | gzip -9 -c> $folder/$db-`date +\%d_\%m_\%Y-\%H-\%M-\%S`.sql.gz 2>&1

# Delete older than 10 days
#find $folder/ -type f -mtime +10 -exec rm -rf {} \;

# # Sync to Dropbox
rsync --chmod=777 -var $folder/ $dropbox
echo "Der blev foretaget en database backup via crontab!"
