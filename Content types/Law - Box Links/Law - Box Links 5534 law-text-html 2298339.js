/***
 *  @author Troy Fleischauer, BS Informatics, HCI '12
 *  @version 210420 
 *  @see Seattle University School of Law 'Law - Box Links' Content Type 5534 law/text/html
 *  Description: Selectively displays headline, subtitle, TinyMCE editor, and up to three Box Links that link internally, externally, or to a file in the media library       
 *  Document will write once when the page loads  
 */

 try {

  /***
   *  Assign local variables from the content type's fields (assign T4 element output tags to variables)
   * 
   * */
  var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");
  var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");

  var Heading = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Heading' output='normal' display_field='value' />");
  var subHeading = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Subheading' output='normal' display_field='value' />");
  var Paragraph = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Paragraph' output='normal' modifiers='medialibrary,nav_sections' />");

  var link1Internal = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 1 Internal' output='linkurl' modifiers='nav_sections' />");
  var link1InternalText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 1 Internal' output='linktext' formatter='linktext/*' />");
  var link1External = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 1 External' output='normal' modifiers='medialibrary, nav_sections' />");
  var link1Text = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 1 Text' output='normal' modifiers='striptags,htmlentities' />");
  var link1MediaPath = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 1 Media' output='normal' formatter='path/*' />");
  var link1MediaText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 1 Media' output='normal' formatter='linktext/*' />");

  var link2Internal = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 2 Internal' output='linkurl' modifiers='nav_sections' />");
  var link2InternalText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 2 Internal' output='linktext' formatter='linktext/*' />");
  var link2External = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 2 External' output='normal' modifiers='medialibrary, nav_sections' />");
  var link2Text = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 2 Text' output='normal' modifiers='striptags,htmlentities' />");
  var link2MediaPath = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 2 Media' output='normal' formatter='path/*' />");
  var link2MediaText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 2 Media' output='normal' formatter='linktext/*' />");

  var link3Internal = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 3 Internal' output='linkurl' modifiers='nav_sections' />");
  var link3InternalText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 3 Internal' output='linktext' formatter='linktext/*' />");
  var link3External = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 3 External' output='normal' modifiers='medialibrary, nav_sections' />");
  var link3Text = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 3 Text' output='normal' modifiers='striptags,htmlentities' />");
  var link3MediaPath = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 3 Media' output='normal' formatter='path/*' />");
  var link3MediaText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Link 3 Media' output='normal' formatter='linktext/*' />");

  /***
   *  Declare/Assign local variables with default formatting and values (inject T4 output tag variables into HTML, store result as a string)
   * 
   * */
  var BoxLinksWrapperOpen = '<div class="BoxLinksWrapper contentItem" id="id' + contentID + '" data-position-default="Main" data-position-selected="Main" aria-labelledby="' + Heading + '">' + anchorTag + '';
  var BoxLinksMainZoneOpen = '<div class="BoxLinksMainZone standardContent">';
  var h2WrapperOpen = '<h2 id="h2id' + contentID + '" class="hidden visually-hidden">';
  var h2WrapperClose = '</h2>';
  var subHeadingHTML = '<h3 class="hidden visually-hidden">' + subHeading + '</h3>';
  var paragraphHTML = '<div class="hidden visually-hidden BoxLinksContent"> ' + Paragraph + ' </div>';
  var openLinksList = '<ul class="boxlinks">';
  var boxLink1Result = '<li class="hidden visually-hidden"><a href="#" class="hidden visually-hidden" title="No Valid Link Provided"><span class="hidden visually-hidden">No Valid Link Provided</span></a></li>';
  var boxLink2Result = '<li class="hidden visually-hidden"><a href="#" class="hidden visually-hidden" title="No Valid Link Provided"><span class="hidden visually-hidden">No Valid Link Provided</span></a></li>';
  var boxLink3Result = '<li class="hidden visually-hidden"><a href="#" class="hidden visually-hidden" title="No Valid Link Provided"><span class="hidden visually-hidden">No Valid Link Provided</span></a></li>';
  var closeLinksList = '</ul>';
  var BoxLinksMainZoneClose = '</div>';
  var BoxLinksWrapperClose = '</div>';

  /***
   *  Handle Selective Output Logic
   * 
   * */
  if (Heading != "") {
    h2WrapperOpen = '<h2 id="h2id' + contentID + '">' + Heading + '' + h2WrapperClose + '';
  }
  if (subHeading != "") {
    subHeadingHTML = '<h3>' + subHeading + '</h3>';
  }
  if (Paragraph != "") {
    paragraphHTML = '<div class="BoxLinksContent">' + Paragraph + '</div>';
  }

  if (link1Internal != "") {
    boxLink1Result = '<li><a href="' + link1Internal + '" title="Links to: ' + link1InternalText + '"><span>' + link1InternalText + '</span></a></li>';
  } else if (link1External != "") {
    boxLink1Result = '<li><a href="' + link1External + '" target="_blank" title="Links to: ' + link1Text + '"><span>' + link1Text + '</span></a></li>';
  } else if ((link1Text != "") && (link1MediaPath != "")) { // if there is custom text and a media file is selected
    boxLink1Result = '<li><a href="' + link1MediaPath + '" title="Links to: ' + link1Text + '"><span>' + link1Text + '</span></a></li>'; // link to the file and use the custom text
  } else if ((link1Text == "") && (link1MediaPath != "")) { // if there is no custom text and a media file is selected
    boxLink1Result = '<li>' + link1MediaText + '</li>'; // use the file name text (anchor tag is auto-generated)
  }

  if (link2Internal != "") {
    boxLink2Result = '<li><a href="' + link2Internal + '" title="Links to: ' + link2InternalText + '"><span>' + link2InternalText + '</span></a></li>';
  } else if (link2External != "") {
    boxLink2Result = '<li><a href="' + link2External + '" target="_blank" title="Links to: ' + link2Text + '"><span>' + link2Text + '</span></a></li>';
  } else if ((link2Text != "") && (link2MediaPath != "")) { // if there is custom text and a media file is selected
    boxLink2Result = '<li><a href="' + link2MediaPath + '" title="Links to: ' + link2Text + '"><span>' + link2Text + '</span></a></li>'; // link to the file and use the custom text
  } else if ((link2Text == "") && (link2MediaPath != "")) { // if there is no custom text and a media file is selected
    boxLink2Result = '<li>' + link2MediaText + '</li>'; // use the file name text (anchor tag is auto-generated)
  }

  if (link3Internal != "") {
    boxLink3Result = '<li><a href="' + link3Internal + '" title="Links to: ' + link3InternalText + '"><span>' + link3InternalText + '</span></a></li>';
  } else if (link3External != "") {
    boxLink3Result = '<li><a href="' + link3External + '" target="_blank" title="Links to: ' + link3Text + '"><span>' + link3Text + '</span></a></li>';
  } else if ((link3Text != "") && (link3MediaPath != "")) { // if there is custom text and a media file is selected
    boxLink3Result = '<li><a href="' + link3MediaPath + '" title="Links to: ' + link3Text + '"><span>' + link3Text + '</span></a></li>'; // link to the file and use the custom text
  } else if ((link3Text == "") && (link3MediaPath != "")) { // if there is no custom text and a media file is selected
    boxLink3Result = '<li>' + link3MediaText + '</li>'; // use the file name text (anchor tag is auto-generated)
  }

  /***
   *  Write the document once
   * 
   * */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, BoxLinksWrapperOpen));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, BoxLinksMainZoneOpen));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, h2WrapperOpen));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, subHeadingHTML));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, paragraphHTML));

  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openLinksList));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, boxLink1Result));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, boxLink2Result));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, boxLink3Result));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeLinksList));

  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, BoxLinksMainZoneClose));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, BoxLinksWrapperClose));

} catch (err) {
  document.write(err.message);
}