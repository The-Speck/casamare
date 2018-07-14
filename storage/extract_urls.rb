url_arr = []

File.open("/home/speck/Desktop/CasaMare/storage/raw_image_url.txt", "r") do |f|
  f.each_line do |line|
    next if line == "\n" || line.length < 50
    url_arr << line
  end
end

File.open('/home/speck/Desktop/CasaMare/storage/image_url.txt', 'w') do |f|
  f.write(url_arr.join)
end
