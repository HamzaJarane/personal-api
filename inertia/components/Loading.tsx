import tw from 'twin.macro';

export default function Loading() {
  return (
    <div css={tw`h-screen w-screen flex justify-center items-center`}>
      <div className="loader" />
    </div>
  );
};