/***
*  Decription: An adaptation of 'Law - Contact Box' with a single stackable contact box and additional 'Phone 2' and 'Fax' fields.
*  See Seattle University School of Law 'Law - Contact Box (Single)' Content Type 5529 law/text/html
*  Document will write once when the page loads
*
*  @version 210414 Updated by Troy Fleischauer, BS Informatics, HCI '12
*/

try {
// Get user entered element values and assign element values to variables
var heading = content.get('Optional Heading');
var fullName = content.get('Full Name');
var title = content.get('Title');
var phone1 = content.get('Phone 1');
var phone2 = content.get('Phone 2');
var fax = content.get('Fax');
var office = content.get('Office');
var email = content.get('Email');
var color = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Background Color' output='normal' display_field='value' />");
var photo = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="Photo" output="normal" formatter="image/*" />');
var facultyProfile = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Faculty profile' output='normal' display_field='value' />");
var additionalText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Additional Text' output='normal' modifiers='medialibrary,nav_sections' />");

// Assign HTML with embedded element values to new variables
var htmlOpen = '<div class="contactBoxSingleWrapper contentItem contactBoxSingleColor' + color + '" id="id' + content.getID() + '" data-position-default="Main">';
var htmlClose = '</div> <!-- close .contactBoxSingleWrapper -->';
var headingString = '<h2 class="contactBoxSingleTitle displayNone">No heading provided</h2>';
var anchorTag = '<t4 type="meta" meta="html_anchor" />';
var openContactBoxSingle = '<div class="standardContent contactBoxSingle d-lg-flex">';
var closeContactBoxSingle = '</div> <!-- close .contactBoxSingle -->';
var openPhotoWrapper = '<div class="contactBoxSinglePhotoWrapper col-12 col-lg-4 me-lg-4">';
var closePhotoWrapper = '</div> <!-- close .contactBoxSinglePhotoWrapper -->';
var contactBoxSinglePhoto ='<div class="contactBoxSinglePhoto">' + photo + '</div>';
var fullName = '<h3>' + fullName + '</h3>';
var openSingleInfoWrapper = '<div class="contactBoxSingleInfoWrapper col-12 col-lg-8">';
var closeSingleInfoWrapper = '</div> <!-- close .contactBoxSingleInfoWrapper -->';
var openSingleInfo = '<div class="contactBoxSingleInfo text-center text-lg-start">';
var closeSingleInfo = '</div> <!-- close .contactBoxSingleInfo -->';
var htmlBox = ''; /* string used to store position and contact info */
var clearFix = '<div class="clearfix"></div>';

// Open the wrapper for this content item. If the user added a heading, place it in an H2. Add background color and ID.
if (heading != "") {
  headingString = '<h2 class="contactBoxSingleTitle">' + heading + '</h2>';
  htmlOpen = '<div class="contactBoxSingleWrapper contentItem contactBoxSingleColor' + color + '" id="id' + content.getID() + '" data-position-default="Main">' + headingString + '';
}

// Assign position (title) and contact info to one variable. Just keep adding to the HTML.
if (title != "") {
    htmlBox += '<p class="contactBoxSingleInfoPosition">' + title + '</p>\n';
}
if (phone1 != "") {
    htmlBox += '<p class="contactBoxSingleInfoPhone"><span class="fas fa-phone"></span><span>&nbsp;' + phone1 + '</span></p>\n';
}
if (phone2 != "") {
    htmlBox += '<p class="contactBoxSingleInfoPhone"><span class="fas fa-phone"></span><span>&nbsp;' + phone2 + '</span></p>\n';
}
if (fax != "") {
    htmlBox += '<p class="contactBoxSingleInfoPhone"><span class="fas fa-fax"></span><span>&nbsp;' + fax + '</span></p>\n';
}
if (office != "") {
    htmlBox += '<p class="contactBoxSingleInfoOffice"><span class="fas fa-map-marker-alt"></span><span>&nbsp;' + office + '</span></p>\n';
}
if (email != "") {
    htmlBox += '<p class="contactBoxSingleInfoEmail"><span class="fas fa-envelope"></span><span>&nbsp;<a href="mailto:' + email + '</span>" aria-label="Send an email to ' + fullName + '">' + email + '</a></p>\n';
}

if (additionalText != "") {
    htmlBox += '<div class="contactBoxSingleInfoAdditional text-sm-start">\n';
    htmlBox += '' + additionalText + '\n';
    htmlBox += '</div> <!-- close .contactBoxSingleInfoAdditional -->\n';
}

// Write the HTML with embedded user values into the page
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, htmlOpen));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, anchorTag));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openContactBoxSingle));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openPhotoWrapper));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, contactBoxSinglePhoto));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closePhotoWrapper));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openSingleInfoWrapper));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, openSingleInfo));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, fullName));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, htmlBox));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeSingleInfo));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeSingleInfoWrapper));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, clearFix));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, closeContactBoxSingle));
document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, htmlClose));

}
catch (exception) {
    document.write (exception); // Catch any errors that the above code may throw 
}