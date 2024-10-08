const today = new Date();

export function formatDate(date) {
  // Ambil nama hari dan tanggal
  const weekdayOptions = { weekday: 'long' };
  const dayOptions = { day: 'numeric' };

  const weekday = new Intl.DateTimeFormat('en-US', weekdayOptions).format(date); // Ambil nama hari
  const day = new Intl.DateTimeFormat('en-US', dayOptions).format(date); // Ambil angka tanggal

  // Ambil bulan singkat dan tahun
  const month = date.toLocaleString('en-US', { month: 'short' }); // Bulan singkat (Sep)
  const year = date.getFullYear(); // Mendapatkan tahun (2024)

  // Gabungkan sesuai urutan yang diinginkan: Sunday, 29 Sep 2024
  return `${weekday}, ${day} ${month} ${year}`;
}


export function Today(){
  return (<p className="text-md ms-3 mt-0">{formatDate(today)}</p>)
}