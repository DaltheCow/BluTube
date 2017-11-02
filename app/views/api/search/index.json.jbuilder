formattedResults = {
  "Video" => [],
}

@results.each do |result|
  formattedResults[result.searchable_type] << result.searchable
end

json.extract!(formattedResults, "Video")
