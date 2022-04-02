interface Options<M = false> {
    accept?: string;
    multiple?: M;
}

export const selectFile = <M extends boolean>({accept, multiple}: Options<M> = {}): Promise<M extends true ? File[] : File> => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    input.type = 'file';
    input.style.display = 'none';
    accept && (input.accept = accept);
    multiple && (input.multiple = multiple);

    return new Promise((resolve, reject) => {
        input.onchange = () => {
            const files = Array.from(input.files ?? []);

            if (files.length) {
                resolve((multiple ? files : files[0]) as any);
            } else {
                reject();
            }
        };

        document.body.removeChild(input);
        input.click();
    });
};