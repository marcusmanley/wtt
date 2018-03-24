jq -s '[ .[0] + .[1] | group_by(.Name)[] | select(length > 1) | add ]' data.json MNData1.json

