var vg_3 = "covid_19_map.vg.json";
vegaEmbed("#choropleth_map", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);