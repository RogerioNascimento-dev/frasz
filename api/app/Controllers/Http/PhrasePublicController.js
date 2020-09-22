'use strict'

const Author = use('App/Models/Author')
const Category = use('App/Models/PhraseCategory')
const Phrase = use('App/Models/Phrase')

class PhrasePublicController {    
    
    async store({request,response}){
        const {category,safe_name,text,author} = request.all();
        /*
        * Obtem apenas o nome da categoria separado por _ e sem caracteres especiais
        */       
        const splited_safe_name = safe_name.split('/')[3];
        
        const objAuthor     = await Author.findOrCreate({name:author},{name:author})
        const objCategory   = await Category.findOrCreate(
            {safe_name:splited_safe_name},
            {name:category,safe_name:splited_safe_name}
            )
        const objPhrase = await Phrase.findOrCreate(
            {text,author_id:objAuthor.id},
            {text,author_id:objAuthor.id,category_id:objCategory.id})

            console.log('|========Nova frase recebida do web scraping|==============')
            console.log('Categoria: '+category);
            console.log('Autor: '+author);            

        return objPhrase;
    }
}

module.exports = PhrasePublicController
