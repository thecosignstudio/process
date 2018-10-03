class NavigationGenerator < Jekyll::Generator
  attr_accessor :site

  def generate(site)
    navigation_links = []
    site.collections["chapters"].docs.each do |doc|
      navigation_links << build_navigation_links(doc)
    end
    site.data["nav"] = build_navigation(navigation_links)
  end

  def build_navigation(links)
    result = ''
    links.each do |chapters|
      chapters.each do |link|
        result += "<h#{link[1]}>" + link[0] + "</h#{link[1]}>"
      end
    end
    result
  end

  def build_navigation_links(doc)
    anchor_base = doc.path.split('/').last.split('.').first + '.html#'
    links = []
    if (doc.content.split(/^#+ /)[1] != nil)
      doc.content.split(/^#+ /).drop(1).each do |heading|
        index = doc.content.index(heading.split(/$/).first)
        if (index < 6)
          rank = doc.content[0..index].count('#')
        else
          rank = doc.content[index-6..index].count('#')
        end
        links << [ '/process/chapters/' + anchor_base + heading.split(/$/).first.downcase.gsub(' ','-'), rank]
      end
    end
    links
  end
end
