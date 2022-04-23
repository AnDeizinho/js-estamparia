
function  Avancar()
{
        if(this.index < this.slides.length){
            this.slides[this.index].style.marginLeft = "-" + ((100/6)*(this.index + 1)) + "%"
            this.index++;
        }
}

