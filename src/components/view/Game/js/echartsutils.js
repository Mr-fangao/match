var dom = document.getElementById("container");
var config = {
    line: {
        xAxis: {
            type: 'category',
            data: [
                '大数据与人工智能应用竞赛',
                '安徽省大学生GIS应用技能大赛',
                '安徽省大学生服务外包创新创业大赛',
                '中国大学生计算机设计大赛',
                '安徽省“互联网+”大学生创新创业大赛',
                '安徽省大学生GIS技能大赛',
                '全国大学生广告艺术大赛',
                '全国大学生数学建模竞赛',
            ],
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '三等奖',
            type: 'bar',
            stack: '获奖等级',
            data: [70, 35, 141, 1237, 450, 121, 3582, 440],
            itemStyle: {
                normal: {
                    color: '#5470c6'
                }
            }
        }, {
            name: '二等奖',
            type: 'bar',
            stack: '获奖等级',
            data: [49, 23, 87, 1219, 132, 74, 2101, 443],
            itemStyle: {
                normal: {
                    color: '#3FBB49'
                }
            }
        }, {
            name: '一等奖',
            type: 'bar',
            stack: '获奖等级',
            data: [24, 12, 47, 599, 48, 31, 1066, 194],
            itemStyle: {
                normal: {
                    color: '#FF8849'
                }
            }
        }]
    }
}