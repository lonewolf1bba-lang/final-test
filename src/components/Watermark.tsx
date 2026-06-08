export default function Watermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <img
        src="/images/smartai-logo-new.png"
        alt=""
        className="w-[600px] h-[600px] object-contain opacity-[0.08]"
        style={{
          filter: "grayscale(100%) brightness(150%) contrast(90%)",
        }}
      />
    </div>
  );
}
