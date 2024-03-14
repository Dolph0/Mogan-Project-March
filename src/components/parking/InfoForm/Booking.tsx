export default function Booking({ booking, onInputChange }: any) {
  const hours = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );
  const minutes = Array.from(
    { length: 60 },
    (_, i) => `${i.toString().padStart(2, "0")}`
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pb-3">
      <div className="col-span-12 lg:col-span-6 space-y-0.5">
        <label htmlFor="Producto" className="block text-sm text-white">
          Producto
        </label>
        <input
          type="text"
          className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
          name="product"
          value={booking.product}
          id="Producto"
          onChange={onInputChange}
        />
      </div>
      <div className="col-span-12 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="flex gap-3 xl:gap-5">
          <div className="space-y-0.5 w-full">
            <label htmlFor="entry_date" className="block text-sm text-white">
              Fecha de entrada
            </label>
            <input
              type="date"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="entry_date"
              id="entry_date"
              value={booking.entry_date}
              onChange={onInputChange}
            />
          </div>
          <div className="space-y-0.5 w-[120px] xl:w-[125px] shrink-0">
            <label
              htmlFor="entry_time_start_hour"
              className="block text-sm text-white"
            >
              Hora de entrada
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                name="entry_hour"
                value={booking.entry_hour}
                onChange={onInputChange}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-1.5 py-[9px]"
              >
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                name="entry_minute"
                value={booking.entry_minute}
                onChange={onInputChange}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-1.5 py-[9px]"
              >
                {minutes.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className=" flex gap-3 xl:gap-5">
          <div className="space-y-0.5 w-full">
            <label
              htmlFor="departure_date"
              className="block text-sm text-white"
            >
              Fecha de salida
            </label>
            <input
              type="date"
              className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
              name="departure_date"
              id="departure_date"
              value={booking.registration}
              onChange={onInputChange}
            />
          </div>
          <div className="space-y-0.5 w-[120px] xl:w-[115px] shrink-0">
            <label
              htmlFor="entry_time_end_hour"
              className="block text-sm text-white"
            >
              Hora de salida
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                name="departure_hour"
                value={booking.departure_hour}
                onChange={onInputChange}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-1.5 py-[9px]"
              >
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <select
                name="departure_minute"
                value={booking.departure_minute}
                onChange={onInputChange}
                className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-1.5 py-[9px]"
              >
                {minutes.map((minute) => (
                  <option key={minute} value={minute}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 space-y-0.5">
        <label htmlFor="registration" className="block text-sm text-white">
          Matrícula
        </label>
        <input
          type="text"
          className="text-sm text-dark bg-white focus:oultine-none focus:ring-0 w-full appearance-none focus-visible:outline-none placeholder:text-gray-400 px-3 py-2"
          name="registration"
          id="registration"
          value={booking.registration}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
