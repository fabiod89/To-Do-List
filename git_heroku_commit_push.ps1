cd "C:\Users\fabio\Documents\Web Development\to-do-list-v1"
$message = Read-Host "What is your commit message?"
git add .
git commit -m $message
git push origin master
git push heroku master