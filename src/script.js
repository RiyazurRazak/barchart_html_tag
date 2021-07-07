// Created by Riyazur Razak on 2021.
// For contact riyazurrazak.com/contact


//wait until dom loaded
window.onload = ()=>{
    //create an custom tag
    document.createElement("barchart")
    //get all custom tags
    const chartElements = document.getElementsByTagName("barchart")
    //apply canvas chart to all elements
    for(let i=0; i<chartElements.length; i++){
          chartTag(chartElements[i])
    }  
}


const chartTag = (tag)=>{
    //get values tag
    const dataTags = tag.getElementsByTagName("data")
    const canvas = document.createElement("canvas")
    let dataValues = []

    //push data tag attributes
    for(let i=0; i<dataTags.length; i++){
        dataValues.push(
            {
                value : parseInt(dataTags[i].attributes.value.nodeValue),
                color : dataTags[i].attributes.color.nodeValue,
            }
        )
    }

    //remove data tags
    tag.innerHTML = ''

    //insert canvase element
    tag.append(canvas)

    //bar chart
    const customHeight = parseInt(tag.attributes.height?.nodeValue)
    const customBackground = tag.attributes.backgroundColor?.nodeValue
    const customWidth = parseInt(tag.attributes.width?.nodeValue)
    const len = dataValues.length
    const width = customWidth ? customWidth +(len*10)+30 : ((len*40)-10)
    const height =  customHeight ? customHeight +80 : 180
    const barWidth = customWidth ? Math.round(customWidth/len) : 20
    canvas.width = width ;
    canvas.height = height;
    let initX = 20
    const ctx = canvas.getContext("2d")
    if( customBackground){
        ctx.fillStyle = customBackground
        ctx.fillRect(0,0,width,height)
    }
    dataValues.map((data)=>{
        ctx.fillStyle = data.color
        ctx.fillText(data.value.toString(), initX, height-30, 20)
        ctx.fillRect(initX, height-Math.floor((data.value *(height-80))/100)-50, barWidth , Math.floor((data.value *(height-80))/100));
        initX +=barWidth+10
    })
}

