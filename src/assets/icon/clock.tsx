interface ClockProps {
  size: number;
  color?: string;
}

const Clock = ({size, color}: ClockProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="32"
        height={size}
        x="0"
        y="0"
        viewBox="0 0 443.294 443.294"
    >
        <g>
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"
                fill={color}
                data-original="#000000"
            />
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"
                fill={color}
                data-original="#000000"
            />
        </g>
    </svg>
);

export default Clock;