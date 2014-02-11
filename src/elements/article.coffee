Tako.Article = do (TK = Tako) ->

  goTo = (article_id)->
    _current_article = current()
    _current_section = _current_article.parent()

    viewType = Tako.viewType()

    if viewType is "PHONE"
        _current_article.attr "data-scroll", window.scrollY
    else
      _current_article.attr "data-scroll", _current_article.scrollTop()

    new_article = $("article##{article_id}")
    new_section = new_article.parent()

    if _current_article[0].id isnt new_article[0].id
      new_section.children().removeClass "active"
      _current = new_article.addClass "active"

    if _current_section[0].id isnt new_section[0].id
      Tako.Section new_section[0].id
    else
      _current_article.trigger "unload"
      _current = new_article.trigger "load"

    if viewType is "PHONE"
      window.scrollTo(0, _current.attr("data-scroll") or 0)
    else
      _current.scrollTop(_current.attr("data-scroll") or 0)


    $(".current[data-article]").removeClass "current"
    $("[data-article=#{article_id}]").addClass "current"
    $("[data-visible]").removeClass "show"
    $("[data-visible=#{article_id}]").addClass "show"

  current = ->
    if _current? then _current else _current = $ "section.active article.active"

  $("[data-article]").each (element) ->
    if @.nodeName is "LI"
      $(@).children().each ->
        $(@).bind "tap", (ev) =>
          do ev.preventDefault
          do ev.stopPropagation
          goTo $(@).parent().attr "data-article"
    $(@).bind "tap", (ev) =>
      do ev.preventDefault
      do ev.stopPropagation
      goTo $(@).attr "data-article"

  _current = null

  (id) -> if id? then goTo id else current()