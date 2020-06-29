'use strict'
const Category = use('App/Models/PhraseCategory')
class PhraseCategoryController {
    async index({request, response}){
        const queryParams = request.get();
        const page = queryParams.page ? queryParams.page : 1
        const categories = await Category.query().with('phrases').paginate(page);
        return categories;
    }
}

module.exports = PhraseCategoryController
