import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements AfterViewInit {



  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#FF4500',
                '#FFD700',
                '#FF6347',
                '#7CFC00',

                ],
        }

    ],
    labels: []

};



  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
  this.http.get('http://localhost:3000/budget')
  .subscribe((res: any) => {
    for (var i = 0; i < res.mybudget.length; i++) {
      this.dataSource.datasets[0].data[i] = res.mybudget[i].budget;
      this.dataSource.labels[i] = res.mybudget[i].title;
      this.createChart();
  }

  });
  }

  createChart() {
    const ctx = document.getElementById('myChart');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
}

}
