#!/bin/bash

FOLDER="CNN_layers"

# Set the date to 3 months ago (macOS syntax)
TARGET_DATE=$(date -v-3m "+%Y%m%d%H%M.%S")

# Backdate the files (macOS syntax)
find "$FOLDER" -exec touch -t "$TARGET_DATE" {} \;

# Create a backdated commit
git add "$FOLDER"
GIT_AUTHOR_DATE=$(date -v-3m "+%Y-%m-%d %H:%M:%S") GIT_COMMITTER_DATE=$(date -v-3m "+%Y-%m-%d %H:%M:%S") git commit -m "Add deep learning assets (backdated)"

echo "Backdated commit created for the '$FOLDER' folder."