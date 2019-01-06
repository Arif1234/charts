import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class BubbleChartService {

  constructor() { }

  renderChart(dataSet: any) {
    const height = 600;
    const width = 600;

    // (d3.scaleOrdinal()): Constructs a new ordinal scale.
    // (d3.schemeCategory10(): An array of ten categorical colors.
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // (d3.pack()): Creates a new circle-packing layout.
    // (pack.size([width, height])): Sets this pack layout’s size.
    // (pack.padding([padding])): Sets pack layout’s padding accessor.
    const bubble = d3.pack()
      .size([width, height])
      .padding(5);

    // (d3.select()): Select an element from the document.
    // Appends <svg> element to selected container and sets hieght and width for the same.
    // Also add bubble class to the <svg> element.
    const svg = d3.select('#bubbleChartContainer')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('class', 'bubble')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 600 600');

    // (d3.hierarchy(data[, children])): Constructs a root node from the specified hierarchical data.
    const nodes = d3.hierarchy(dataSet)
    .sum(function (d: any) {
      return d.count;
    });

    // d3.selectAll: Select multiple elements from the document.
    // Properties for each bubble.
    const node = svg.selectAll('.node')
      .data(bubble(nodes).descendants())
      .enter()
      .filter(function (d: any) {
        return !d.children;
      })
      .append('g')
      .attr('class', 'node')
      .attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      }).style('fill', function (d, i: any) {
        return color(i);
      });

    // Tooltip
    // node.append('title')
    //   .text(function (d: any) {
    //       return d.name + ': ' + d.count;
    //   });

    // Bubble color and co-ordinate manipulation.
    node.append('circle')
      .attr('x', function (d: any) { return d.x; })
      .attr('y', function (d: any) { return d.y; })
      .attr('r', function (d: any) {
        return d.r;
      })
      .style('fill', function (d, i: any) {
        return color(String(i));
      });

    // First line of the text added to bubble.
    node.append('text')
      .attr('dy', '.2em')
      .style('text-anchor', 'middle')
      .text(function (d: any) {
        return d.data.name.substring(0, d.r / 3);
      })
      .attr('font-family', 'sans-serif')
      .attr('font-size', function (d) {
        return d.r / 5;
      })
      .attr('fill', 'white');

    // Second line of the text added to bubble.
    node.append('text')
      .attr('dy', '1.3em')
      .style('text-anchor', 'middle')
      .text(function (d: any) {
        return d.data.count;
      })
      .attr('font-family', 'Gill Sans')
      .attr('font-size', function (d) {
        return d.r / 5;
      })
      .attr('fill', 'white');

    // self.frameElement: Returns the element (such as <iframe> or <object>)
    // in which the window is embedded, or null if the element is either top-level or
    // is embedded into a document with a different script origin; that is,
    // in cross-origin situations.
    d3.select(self.frameElement)
      .style('height', height + 'px')
      .style('width', width + 'px');
  }
}
