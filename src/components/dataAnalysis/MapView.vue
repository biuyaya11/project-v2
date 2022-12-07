<template>
  <div class="map-view">地图预览
    <div id="main"></div>   //这里是id哟
  </div>
</template>

<script>
import geoJson from '@/assets/data.json'
export default {
  data() {
    return {}
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('main'))
    this.$echarts.registerMap('china', geoJson) //注册可用的地图，必须包括geo组件、map图表类型的时候才可用使用
    console.log(geoJson)
    let option = {
      backgroundColor: 'rgb(121,145,209)',
      geo: {
        map: 'china',
        aspectScale: 0.75,
        zoom: 1.1,
        itemStyle: {
          normal: {
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: '#09132c'  //0%处的颜色
                },
                {
                  offset: 1,
                  color: '#274d68'//100%处的颜色
                },
              ],
              globalCoord: true,
            },
            shadowColor: 'rgb(58,115,192)',
            shadowOffsetX: 10,
            shadowOffsetY: 11,
          }
        },
        regions: [{
          name: '南海诸岛',
          itemStyle: {
            opacity: 0,
          }
        }]
      },
      series: [
        {
          //  配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
          type: 'map',
          label: {
            normal: {
              show: 'true',
              textStyle: {
                color:'#1DE986',
              },
            },
            emphasis: {
              textStyle: {
                color: 'rgb(183,185,14)',
              }
            }
          },
          zoom: '1.1',
          map: 'china',
          itemStyle: {
            normal: {
              areaColor: {
                backgroundColor: 'rgb(147,235,248)',
                borderWidth: 1,
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgb(31,54,150)'  //0%处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgb(89,128,132)'//100%处的颜色
                  },
                ],
                globalCoord: true,
              }
            },
            emphasis: {
              areaColor: 'rgb(46,229,142)',
              borderWidth: 0.1,
            }
          },
        }]
    }
    myChart.setOption(option);
  }
}
</script>

<style lang="less">
.map-view{
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }

}
</style>