import ReactDOM from 'react-dom';
import domtoimage from "components/custom-lib/dom-to-image";
import jsPDF from "components/custom-lib/jspdf";

export function getPNG(DOMnode, resultHolder, callbacks) {
    if (!DOMnode) {
        callbacks();
    } else {
        return domtoimage.toPng(ReactDOM.findDOMNode(DOMnode)).then((imgdata) => {
            resultHolder.push(imgdata);
            callbacks();
        });
    }
}


export function chainGetPNG(targets, images, callbacks) {
    var chain = callbacks;
    for(var i=targets.length-1; i>=0; i--) {
        let t = targets[i];
        let c = chain;
        chain = () => getPNG(t, images, c);
    }
    chain();
}

export function dumpAllToPDF(images, name) {
    var doc = new jsPDF();
    doc.deletePage(1);

    for(let i in images) {
        let imgContent = images[i].split(",")[1];
        let imgSize = getPngDimensions(imgContent);
        let magic = 31; // this should be 0. But there're some bug that jsPDF add extra padding to the right of the page. I have no idea why...

        doc.addPage(imgSize.width-magic, imgSize.height);
        doc.addImage(images[i], 0, 0, imgSize.width, imgSize.height);
        doc.save(name);
    }
}

export function getPngDimensions(base64) {
    // https://stackoverflow.com/questions/15327959/get-height-and-width-dimensions-from-base64-png/15327984
    const header = atob(base64.slice(0, 50)).slice(16,24)
    const uint8 = Uint8Array.from(header, c => c.charCodeAt(0))
    const dataView = new DataView(uint8.buffer)

    return {
        width: dataView.getInt32(0),
        height: dataView.getInt32(4)
    }
}