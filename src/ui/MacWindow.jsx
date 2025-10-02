import { Rnd } from "react-rnd";

const MacWindow = ({ title, children, onClose, x, y, w, h }) => (
  <Rnd
    default={{
      x: x,
      y: y,
      width: w || 1000,
      height: h || 600,
    }}
    bounds="parent"
  >
    <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg w-full h-full flex flex-col">
      <div className="window-header flex items-center px-3 py-2 bg-gray-900 rounded-t-xl cursor-move">
        <div className="flex space-x-2 mr-[.6rem]" onClick={onClose}>
          <button className="w-3 h-3 rounded-full bg-red-500" />
          <button className="w-3 h-3 rounded-full bg-yellow-500" />
          <button className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-gray-300">{title}</span>
      </div>
      <div className="text-gray-200 flex-1 overflow-x-hidden">{children}</div>
    </div>
  </Rnd>
);

export default MacWindow;