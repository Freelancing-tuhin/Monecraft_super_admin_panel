import CardBox from '../../shared/CardBox';
import { Icon } from '@iconify/react';
import Chart from 'react-apexcharts';
const ChartData: any = {
  series: [20, 20, 20, 20, 20],
  labels: ['245', '45', '14', '78', '95'],
  chart: {
    height: 230,
    fontFamily: 'inherit',
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: '90%',
      },
    },
  },
  grid: {
    padding: {
      bottom: -80,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    name: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    colors: 'var(--color-surface-ld)',
  },
  tooltip: {
    fillSeriesColor: false,
  },
  colors: [
    'var(--color-error)',
    'var(--color-warning)',
    'var(--color-lightwarning)',
    'var(--color-lightsecondary)',
    'var(--color-secondary)',
  ],
};

const lastDayOfPreviousMonth = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  0,
).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
const YourPerformance = ({ performence }: any) => {
  return (
    <>
      <CardBox>
        <div>
          <h5 className="card-title">Booking Performance</h5>
          <p className="card-subtitle">Last check on {lastDayOfPreviousMonth}</p>
        </div>
        <div className="grid grid-cols-12 mt-6">
          <div className="md:col-span-6 col-span-12">
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-lightprimary rounded-tw">
                  <Icon icon="solar:shop-2-linear" className="text-primary" height={24} />
                </span>
                <div>
                  <h5 className="text-15">{performence?.newBookings} new bookings</h5>
                  <p className="text-sm">great </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-lighterror rounded-tw">
                    <Icon icon="solar:filters-outline" className="text-error" height={24} />
                  </span>
                  <div>
                    <h5 className="text-15">{performence?.pending} Bookings</h5>
                    <p className="text-sm">Pending</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-lightsecondary rounded-tw">
                    <Icon icon="solar:pills-3-linear" className="text-secondary" height={24} />
                  </span>
                  <div>
                    <h5 className="text-15">{performence?.confirmed} Bookings</h5>
                    <p className="text-sm">Confirmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:-mt-8 mt-4">
            <Chart
              options={ChartData}
              series={ChartData.series}
              type="donut"
              height="230px"
              width="100%"
            />
            <h4 className="text-center text-3xl md:mt-3">{performence?.total}</h4>
            <p className="text-sm text-center mt-3">
              Learn insigs how to manage all aspects of your startup.
            </p>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default YourPerformance;
