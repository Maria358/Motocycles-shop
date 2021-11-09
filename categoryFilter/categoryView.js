export default class CategoryView {
    
    constructor( onClickByCategory ){
        this.types = document.querySelectorAll( '.type' );
        this.types.forEach( el => el.addEventListener( 'click', onClickByCategory ) );
    }
}