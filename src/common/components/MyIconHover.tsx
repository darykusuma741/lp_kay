import clsx from 'clsx';

interface MyIconHoverProps {
  img: string;
  imgHover: string;
  className?: string;
  groupHover?: boolean;
}

const MyIconHover: React.FC<MyIconHoverProps> = ({
  img,
  imgHover,
  groupHover = true,
  className
}) => {
  return (
    <>
      <img
        src={img}
        className={clsx('hidden', className, {
          'group-hover:block': groupHover,
          'hover:block': !groupHover
        })}
      />
      <img
        src={imgHover}
        className={clsx('block w-6 h-6 bg-center bg-contain bg-no-repeat', {
          'group-hover:hidden': groupHover,
          'hover:hidden': !groupHover
        })}
      />
    </>
  );
};

export default MyIconHover;
