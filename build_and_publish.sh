# Check if the version tag has been updated
read -p "Have you updated the version tag in streamlit_elements/version.py and pyproject.toml? (y/n): " version_update

if [[ "$version_update" == [Yy]* ]]; then
    # build
    cd streamlit_elements/frontend && npm install && npm run build
    # rye build
    # using setup file in order to include frontend build (not included for whatever reason in case of rye build)
    cd ../../
    python setup.py sdist bdist_wheel

    # publish
    read -p "Do you want to publish the package? (y/n): " publish_choice
    if [[ "$publish_choice" == [Yy]* ]]; then
        rye publish
    else
        echo "Publish step skipped."
    fi
else
    echo "Please update the version tag in streamlit_elements/version.py and pyproject.toml before proceeding."
fi