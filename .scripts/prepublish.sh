echo "Transpiling 'src' into ES5 ..."
if [ -e dist ]
then
	rm -r dist
fi
./node_modules/.bin/babel --ignore tests,stories --plugins "transform-runtime" ./src --out-dir ./dist
echo "Transpiling completed."
