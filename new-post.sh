#!/bin/bash

# Check if post name is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <post-name>"
    echo "Example: $0 my-second-post"
    exit 1
fi

POST_NAME="$1"

# Get the next post number by counting existing posts
CONTENT_DIR="content/post"
NEXT_NUM=$(printf "%02d" $(($(ls -1d ${CONTENT_DIR}/[0-9][0-9]-* 2>/dev/null | wc -l) + 1)))

# Create the post with Hugo
hugo new "post/${NEXT_NUM}-${POST_NAME}/index.md"

echo "Created new post: ${CONTENT_DIR}/${NEXT_NUM}-${POST_NAME}/index.md"
