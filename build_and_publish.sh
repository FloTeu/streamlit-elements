# build
cd streamlit_elements/frontend && npm install && npm run build
#rye build
# using setup file in order to include frontend build (not included for what ever reason in case of rye build)
python setup.py sdist bdist_wheel

# publish
read -p "Do you want to publish the package? (y/n): " choice
if [[ "$choice" == [Yy]* ]]; then
    rye publish
else
    echo "Publish step skipped."
fi