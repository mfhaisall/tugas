import UserStats from '../components/UserStats';
import NavigationTabs from '../components/NavigationTabs';


const Dashboard = () => {
  return (
    <>
      
      <div className="flex justify-between items-center ">
        <h3 className="text-green-600 font-bold text-xl">Hello, User Welcome Back</h3>
        <NavigationTabs />
      </div>

      <div className='flex justify-between items-center mt-3'>
      <h3 className="text-black font-bold text-xl ">Overview</h3>
      <button type="button" class="px-3 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Widget</button>
      </div>

      
      <div className="flex gap-6 mt-10 ml-10">
        <UserStats />
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Summary
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 font-bold">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    12k"
                </th>
                <td class="px-6 py-4">
                    13k
                </td>
                <td class="px-6 py-4">
                    16k
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    revenue
                </th>
                <td class="px-6 py-4">
                    orders
                </td>
                <td class="px-6 py-4">
                    avg.order value
                </td>
                <td class="px-6 py-4">
                    net profit
                </td>
                
            </tr>
        </tbody>
    </table>
</div>

      </div>

      <div className="flex gap-6 mt-10 ml-10">
        <UserStats />
        <div class="container mx-auto p-4">
  
        <div className='shadow-lg'>
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-xl font-semibold">Recent Transactions</h2>
    <a href="#" class="text-blue-500 hover:underline">View All</a>
  </div>
<div class="overflow-x-auto">
    <table class="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">2023-10-01</td>
          <td class="px-6 py-4 whitespace-nowrap">Rp 150.000</td>
          <td class="px-6 py-4 whitespace-nowrap">10:15 AM</td>
        </tr>
        
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">2023-10-02</td>
          <td class="px-6 py-4 whitespace-nowrap">Rp 200.000</td>
          <td class="px-6 py-4 whitespace-nowrap">02:45 PM</td>
        </tr>
        
        
        
       
      </tbody>
    </table>
  </div>
</div>
</div>
      </div>


    </>
  );
};

export default Dashboard;