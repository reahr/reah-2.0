echo Starting deployment to gh-pages...

if [ -n "$1" ]; then # If first parameter passed then print Hi

	msg=$1

else

	read -p "Enter Commit Message: "  msg
fi

npm run build
echo
echo Adding to git branch gh-pages...
echo
git add dist -f
git commit -m $msg
git push origin `git subtree split --prefix dist master`:gh-pages --force

echo
read -rsp $'Press any key to exit...\n' -n 1 key