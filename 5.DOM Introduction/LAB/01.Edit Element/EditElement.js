function editElement(element, stringMatch, replaceString) {
   element.textContent = element.textContent
                .replaceAll(stringMatch,replaceString );
}