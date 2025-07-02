import { motion } from 'framer-motion';

type IndicatorPropsT = {
  color: string;
  closeDuration: number;
};

const ToastIndicator: React.FC<IndicatorPropsT> = ({
  color,
  closeDuration,
}) => {
  return (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: 0 }}
      transition={{ duration: closeDuration / 1000, delay: 0.18 }}
      className="absolute bottom-0 left-0 h-1"
      style={{ backgroundColor: color }}
    ></motion.div>
  );
};

export default ToastIndicator;
