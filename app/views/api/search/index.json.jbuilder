# formattedResults = {
#   "Video" => [],
# }
#
# @results.each do |result|
#   formattedResults[result.searchable_type] << result.searchable
# end
#
# json.extract! formattedResults, "Video"


ids = @results.map{|result| result.searchable.id}


json.Video Video.find(ids) do |video|
  json.partial! 'api/videos/videos', video: video;
end
