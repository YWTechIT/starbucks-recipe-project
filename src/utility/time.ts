const SECOND = 0.5;
const MILLISECOND = 1000;
const DELAY_TIME = SECOND * MILLISECOND;

export const delayedLoading = (status: boolean): Promise<boolean> => {
    return new Promise((resolve, reject) =>
        setTimeout(() => resolve(status), DELAY_TIME)
    );
};
