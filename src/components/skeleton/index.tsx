import ContentLoader from "react-content-loader";
import { SkeletonWrapper } from "./style";

const Skeleton = (props: any) => (
    <SkeletonWrapper>
        <ContentLoader
            viewBox="0 0 900 507"
            height={600}
            width="100%"
            {...props}
        >
            {/* first row */}
            <rect x="70" y="60" rx="0" ry="0" width="230" height="140" />
            <rect x="70" y="209" rx="0" ry="0" width="230" height="15" />
            <rect x="70" y="231" rx="0" ry="0" width="230" height="15" />
            <rect x="343" y="60" rx="0" ry="0" width="230" height="140" />
            <rect x="343" y="209" rx="0" ry="0" width="230" height="15" />
            <rect x="343" y="231" rx="0" ry="0" width="230" height="15" />
            <rect x="615" y="60" rx="0" ry="0" width="230" height="140" />
            <rect x="615" y="209" rx="0" ry="0" width="230" height="15" />
            <rect x="615" y="231" rx="0" ry="0" width="230" height="15" />

            {/* second row */}
            <rect x="70" y="290" rx="0" ry="0" width="230" height="140" />
            <rect x="70" y="440" rx="0" ry="0" width="230" height="15" />
            <rect x="70" y="464" rx="0" ry="0" width="230" height="15" />
            <rect x="343" y="290" rx="0" ry="0" width="230" height="140" />
            <rect x="343" y="440" rx="0" ry="0" width="230" height="15" />
            <rect x="343" y="464" rx="0" ry="0" width="230" height="15" />
            <rect x="615" y="290" rx="0" ry="0" width="230" height="140" />
            <rect x="615" y="440" rx="0" ry="0" width="230" height="15" />
            <rect x="615" y="464" rx="0" ry="0" width="230" height="15" />
        </ContentLoader>
    </SkeletonWrapper>
);

export default Skeleton;
