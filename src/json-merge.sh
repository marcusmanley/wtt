jq -s '[ .[0] + .[1] | group_by(.properties.Name)[] | select(length > 1) | add ]' data.json MNDist.json

jq -s '[.[0] * .[1] | add ]' data1.json MNData2.json 

cat data.json | jq '.Name'

cat data.json | jq '.[] | .Name'

cat MNDist.json | jq '.[] | .properties.Name'