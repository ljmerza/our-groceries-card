import { css } from 'lit-element';

const style = css`
    .our-groceries-card {
        display: flex;
        padding: 0 16px 4px;
        flex-direction: column;
    }

    .our-groceries-card .header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
        opacity: var(--dark-primary-opacity);
        padding: 24px 0px 0px;    
    }

    .our-groceries-card .td-name {
        width: 75%;
    }

    .our-groceries-card table {
        width: 100%;
    }

    .our-groceries-card th,
    .our-groceries-card .td {
        padding: 10px;
    }

    .our-groceries-card thead {
        text-align: left;
    }

    .our-groceries-card tbody {
        text-align: left;
    }

    .our-groceries-card ul {
        margin: 0px;
        margin-bottom: 10px;
        padding-inline-start: 30px;
    }

    .our-groceries-card .td-name ha-icon,
    .our-groceries-card .new-item ha-icon {
        color: var(--primary-color);
    }

    .our-groceries-card li {
        padding-bottom: 15px;
        display: flex;
        justify-content: space-between;
    }

    .our-groceries-card li div {
        margin-top: 3px;
        padding-right: 10px;
        max-width: 88%;
    }

    .our-groceries-card li ha-icon {
        width: 24px;
        height: 24px;
        color: var(--google-red-500);
    }

    .our-groceries-card .new-item {
        display: flex;
    }

    .our-groceries-card .add-item {
        align-self: center;
        margin-left: 10px;
        margin-top: 10px;
    }

    .pointer {
        cursor: pointer; 
    }

    .crossed-off {
       text-decoration: line-through;
    }
`;

export default style;
