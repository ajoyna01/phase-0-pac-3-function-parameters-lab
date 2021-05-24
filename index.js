//describe('introduction(name)', function() {
//   it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
//        expect(introduction("Josh")).toEqual("Hi, my name is Josh.");
//        expect(introduction("Nancy")).toEqual("Hi, my name is Nancy.");
//      })
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

introduction('Josh'); // "Hi, my name is Josh"
introduction('Nancy'); // "Hi, my name is Nancy"

//describe('introductionWithLanguage(name, language)', function() {
//    it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
//       expect(introductionWithLanguage("Josh", "Ember.js")).toEqual("Hi, my name is Josh and I am learning to program in Ember.js.");
//      expect(introductionWithLanguage("Nancy", "React")).toEqual("Hi, my name is Nancy and I am learning to program in React.");
//     })
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
    introductionWithLanguage('Josh', 'Ember.js');
    introductionWithLanguage('Nancy', 'React');

//describe('introductionWithLanguageOptional(name, language)', function() {
//it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
//expect(introductionWithLanguageOptional("Gracie")).toEqual("Hi, my name is Gracie and I am learning to program in JavaScript.");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
    introductionWithLanguageOptional ('Gracie', 'JavaScript')
    