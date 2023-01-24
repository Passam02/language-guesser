import langs from 'langs'
import colors from 'colors'
import {franc, francAll} from 'franc'

const text = process.argv[2]

try {
    let langCode = francAll(text)[0][0]
    console.log(langs.where("3",langCode)['name'].green)

} catch {
    console.log('Could not find the language, please try with longer text'.red)
}