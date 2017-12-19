ids = @results.map{|result| result.searchable.id}


json.Video Video.find(ids) do |video|
  json.partial! 'api/videos/videos', video: video;
end
