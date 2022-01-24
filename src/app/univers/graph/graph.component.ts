import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {EChartsOption} from "echarts";
import {ThemeOption} from "ngx-echarts";
import {Personnage} from './Personnage.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  myChart!: any;

  personnageList: Personnage[] = [
    new Personnage('Yoda', 44, '#2FF924'),
    new Personnage('R2-D2', 59, 'lightblue'),
    new Personnage('Laia Organa', 77, 'pink'),
    new Personnage('Han Solo', 83, 'brown'),
    new Personnage('Obi-Wan Kenobi', 113, '#2E67F8'),
    new Personnage('Rey', 128, 'gold'),
    new Personnage('Luke Skywalker', 132, '#40E0D0'),
    new Personnage('Dark Vador', 162, 'red')
  ];

  theme: ThemeOption = {
    itemStyle: {
      color: [
        '#55C22D', '#ffeeff'
      ],
    },
  };

  chartOption: EChartsOption = {
    aria: {
      enabled: true
    },
    title: {
      text: 'Temps à l\'écran par personnages',
      top: 0,
      left: 'center',
      padding: [0, 0, 5, 0],
      textStyle: {
        align: 'center',
        fontSize: 16
      }
    },
    xAxis: {
      name: 'Personnages',
      nameLocation: 'middle',
      nameTextStyle: {
        padding: 10,
        fontSize: 14
      },
      type: 'category',
      data: [
        ...this.personnageList.map(personnage => personnage.nom)
      ]
    },
    yAxis: {
      name: 'Temps à l\'écran (min)',
      nameTextStyle: {
        align: 'left',
        fontSize: 14
      },
      type: 'value'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} :<br/> {c} min'
    }
  };

  /**
   * @param myChart l'instance du graphique
   */
  onChartInit(myChart: any) {
    let valeurs: any[] = this.personnageList.map(
      personnage => {
        return {value: personnage.tempsEcran, itemStyle: {color: personnage.color}};
      }
    );

    this.chartOption.series = [{
      type: "bar",
      label: {
        show: true,
        position: 'top'
      },
      color: [...this.personnageList.map(personnage => personnage.color)],
      data: valeurs
    }];
    myChart.setOption(this.chartOption);
    this.myChart = myChart;
  }

  onChange(): void {
    this.checked = !this.checked;
    this.myChart.setOption({
      aria: {
        decal: {
          show: this.checked
        }
      }
    });
  }
}
