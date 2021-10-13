function init() {

    
 console.log({ fleetSalesObject });

 setUpCascadingList();

}

function setUpCascadingList() {

    const selectMf = document.querySelector('#selectMf');
    const selectModel = document.querySelector('#selectModel');
    const selectVersion = document.querySelector('#selectVersion');

    for(let mf in fleetSalesObject) {

        selectMf.options.add(new Option(mf, mf))
    }

    selectMf.onchange = function () {

        selectModel.length = 0;
        selectVersion.length = 0;

        selectModel.options.add(new Option('Choose a model', '0'))
        selectVersion.options.add(new Option('Choose a model', '0'))
        for(let model in fleetSalesObject[this.value]) {

            selectModel.options.add(new Option(model, model))
        }

    }

    selectModel.onchange = function () {
        selectVersion.length = 0;

        let versions = fleetSalesObject[selectMf.value][this.value]
        selectVersion.options.add(new Option('Choose a version', '0'))
        for(let currentVersion of versions) {

            selectVersion.options.add(new Option(currentVersion,currentVersion));
        }


    }

}