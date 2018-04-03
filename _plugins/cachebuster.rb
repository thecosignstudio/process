require 'digest'

module Jekyll
  # Jekyll assets cachebuster filter
  #
  # Place this file into `_plugins`.
  module CachebusterFilter
    # Usage example:
    #
    # {{ "/style.css" | cachebuster }}
    # {{ "/style.css" | cachebuster | absolute_url }}
    def cachebuster(filename)
      sha256 = Digest::SHA256.file(
        File.join(@context.registers[:site].dest, filename)
      )

      "#{filename}?cb=#{sha256.hexdigest[0, 6]}"
    rescue
      # Return filename unmodified if file was not found
      filename
    end
  end
end

Liquid::Template.register_filter(Jekyll::CachebusterFilter)
