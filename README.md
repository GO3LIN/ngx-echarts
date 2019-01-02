# NgxEcharts

This is a wrapper for the echarts library, the main motivation for creating this wrapper is to get lazy loading modules using ES6 dynamic imports. Hence, increasing performance by reducing the vendor bundle size.

## Usage

Using the library is quiet simple and straight forward, simply import it in your module:

`import { NgxEchartsLibModule } from 'ngx-echarts-lib';`

And use it in your component, like this:

`<ne-chart [option]="option"></ne-chart>`

The `option` input is an object that is the same echarts option parameter: https://ecomfe.github.io/echarts-doc/public/en/option.html#title

Also, there are some other parameters that you can use with the library:

### Inputs

| Name | Type | Description |
|---|---|---|
| option | EChartOption | The echarts option parameter, see the link in the usage section. |
| theme | Object or string | Theme to be applied. This can be a configuring object of a theme, or a theme name registered through echarts.registerTheme. |
| devicePixelRatio | number | Ratio of one physical pixel to the size of one device independent pixels. Browser's window.devicePixelRatio is used by default. |
| renderer | string | Supports 'canvas' or 'svg'. |

### Output

The library outputs the echart instance when the chart is successfuly initialized, so in your html template use the ready output like this:

`<ne-chart [option]="option" (ready)="chartReady($event)"></ne-chart>`

Then, in your component.ts file, you can get the chart instance

```typescript
chartReady(chartInstance) {
    // Deal with it 8)
}
```

## Development server

Run `ng run lib` for building the library and watching for changes.
Then in another terminal, run `ng serve` or `npm start` to run the demo app.

## Deployment

If you want to deploy the library, there's a 
